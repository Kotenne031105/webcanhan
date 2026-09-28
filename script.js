const form = document.getElementById("shareForm");

const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const reason = document.getElementById("reason").value;

    if (name === "" || phone === "" || reason === "") {

        message.innerHTML = "<p>⚠️ Vui lòng nhập thông tin</p>";

        return;
    }


    message.innerHTML = `
        <h3>✅ Chia sẻ thành công</h3>
        <p>Thông tin của bạn đã được chia sẻ.</p>
    `;

    form.reset();

});