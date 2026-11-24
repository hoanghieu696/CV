/* =====================
   1. MENU ĐIỆN THOẠI
===================== */

const menu =
    document.getElementById("menu");

const links =
    document.getElementById("links");

menu.addEventListener("click", () => {

    const open =
        links.classList.toggle("open");

    menu.setAttribute(
        "aria-expanded",
        String(open)
    );

    menu.textContent = open ? "✕" : "☰";
    menu.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");

});

/* ĐÓNG MENU KHI NHẤN LIÊN KẾT */

links.querySelectorAll("a").forEach((a) => {

    a.addEventListener("click", () => {

        links.classList.remove("open");

        menu.textContent = "☰";
        menu.setAttribute("aria-label", "Mở menu");

        menu.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

/* =====================
   2. SAO CHÉP SỐ ĐIỆN THOẠI
===================== */

document.getElementById(
    "copyPhone"
).addEventListener("click", async () => {

    const toast =
        document.getElementById("toast");

    try {

        await navigator.clipboard.writeText(
            "0325466955"
        );

        toast.textContent =
            "Đã sao chép 0325466955!";

    } catch (error) {

        toast.textContent =
            "Không thể tự sao chép. Số điện thoại: 0325466955";

    }

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && links.classList.contains("open")) {
        menu.click();
        menu.focus();
    }
});
document.querySelector('#menu') !== null