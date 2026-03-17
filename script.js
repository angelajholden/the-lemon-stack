document.addEventListener("DOMContentLoaded", () => {
	const e = document.getElementById("date"),
		t = new Date().getFullYear();
	e && (e.textContent = t);
	const n = document.querySelector("body"),
		a = document.querySelectorAll(".menu_button"),
		o = document.querySelector(".open_button");
	a.forEach((e) => {
		e.addEventListener("click", () => {
			n.classList.toggle("menu_active") ? o.setAttribute("aria-expanded", "true") : o.setAttribute("aria-expanded", "false");
		});
	}),
		document.addEventListener("keydown", (e) => {
			"Escape" === e.key && n.classList.contains("menu_active") && (n.classList.remove("menu_active"), o.setAttribute("aria-expanded", "false"));
		});
	const r = document.querySelector("form");
	if (r) {
		const e = r.querySelector('input[name="page_url"]');
		e && (e.value = window.location.href);
		const t = r.querySelector('input[name="page_path"]');
		t && (t.value = window.location.pathname),
			r.addEventListener("submit", (e) => {
				if (!r.checkValidity()) return e.preventDefault(), void r.reportValidity();
				const t = r.querySelector('button[type="submit"]');
				t && ((t.disabled = !0), (t.textContent = "Sending..."));
			});
	}
});
