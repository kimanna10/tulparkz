
$(function () {
    var maxRows = 7; // Количество строк на странице
    var visiblePages = 3; // Количество видимых страниц до появления "..."

    $('.table-block').each(function (index) {
        var $table = $(this);
        var tableId = $table.attr('id');
        var $paginationContainer = $('#pagination-' + (index + 1));
        var $pagination = $paginationContainer.find('.pagination ul');
        var currentPage = 1; // Текущая страница
        var totalPages = Math.ceil($table.find('tbody tr').length / maxRows);

        function showRows(pageNum) {
            var startIndex = (pageNum - 1) * maxRows;
            var endIndex = startIndex + maxRows;
            $table.find('tbody tr').hide().slice(startIndex, endIndex).show();
        }

        function generatePagination() {
            var paginationHtml = '';
            paginationHtml += generatePreviousButton();
            paginationHtml += generatePageNumbers();
            paginationHtml += generateNextButton();
            $pagination.html(paginationHtml);
            $pagination.find('li[data-page="' + currentPage + '"]').addClass('active');
        }

        function generatePreviousButton() {
            var buttonHtml = '';
            buttonHtml += '<li data-page="prev" class="arrow-prev"><span class="pagination__icon icon-caret-left"></span></li>';
            return buttonHtml;
        }

        function generateNextButton() {
            var buttonHtml = '';
            buttonHtml += '<li data-page="next" class="arrow-next"><span class="pagination__icon icon-caret-right"></span></li>';
            return buttonHtml;
        }

        function generatePageNumbers() {
            var pageHtml = '';

            // Рассчитываем текущую группу страниц
            var currentGroup = Math.ceil(currentPage / visiblePages);

            // Начальная страница текущей группы
            var startPage = (currentGroup - 1) * visiblePages + 1;

            // Если текущая группа не первая, добавляем многоточие перед первой страницей
            if (startPage > 1) {
                pageHtml += '<li data-page="1"><span>1</span></li>';
                if (startPage > 2) {
                    pageHtml += '<li data-page="..." class="ellipsis prev-ellipsis"><span>...</span></li>';
                }
            }

            // Добавляем страницы текущей группы
            var endPage = Math.min(startPage + visiblePages - 1, totalPages);
            for (var i = startPage; i <= endPage; i++) {
                pageHtml += '<li data-page="' + i + '"><span>' + i + '</span></li>';
            }

            // Если текущая группа не последняя, добавляем многоточие после последней страницы
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageHtml += '<li data-page="..." class="ellipsis next-ellipsis"><span>...</span></li>';
                }
                pageHtml += '<li data-page="' + totalPages + '"><span>' + totalPages + '</span></li>';
            }

            return pageHtml;
        }

        generatePagination();
        showRows(currentPage);

        $pagination.on('click', 'li[data-page]', function () {
            var pageNum = $(this).attr('data-page');

            if (pageNum == 'prev') {
                currentPage = Math.max(1, currentPage - 1);
            } else if (pageNum == 'next') {
                if (currentPage < totalPages) {
                    currentPage++;
                }
            } else if ($(this).hasClass('ellipsis')) {
                var isPrevEllipsis = $(this).hasClass('prev-ellipsis');
                if (isPrevEllipsis) {
                    currentPage = (Math.ceil(currentPage / visiblePages) - 2) * visiblePages + visiblePages;
                    currentPage = Math.max(1, currentPage);
                } else {
                    currentPage = Math.ceil(currentPage / visiblePages) * visiblePages + 1;
                    currentPage = Math.min(currentPage, totalPages);
                }
            } else {
                currentPage = parseInt(pageNum);
            }

            generatePagination();
            showRows(currentPage);
        });
    });
});
