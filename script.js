const imgBox = document.getElementById("imgBox");
        const qrImage = document.getElementById("qrImage");
        const qrText = document.getElementById("qrText");

        function generateQR() {
            const text = qrText.value.trim();
            if (text.length > 0) {
                const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}`;
                qrImage.src = apiUrl;
                imgBox.style.display = "block";
                qrText.classList.remove("error");
            } else {
                qrText.classList.add("error");
                setTimeout(() => qrText.classList.remove("error"), 1000);
            }
        }