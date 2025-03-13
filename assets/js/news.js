document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 1;
    const itemsPerPage = 5;

    function renderNewsList() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentNews = newsData.slice(start, end);

        const newsList = document.getElementById("news-list");
        currentNews.forEach((item) => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.innerHTML = `
                <h6 class="mb-0 text-muted fade show">${new Date(item.date).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })}</h6>
                <p class="mt-2 mb-0">${item.content}</p>
            `;
            newsList.appendChild(li);
        });

        if (end >= newsData.length) {
            document.getElementById("load-more").style.display = "none";
        }
    }

    document.getElementById("load-more").addEventListener("click", () => {
        currentPage++;
        renderNewsList();
    });

    window.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            currentPage++;
            renderNewsList();
        }
    });
});