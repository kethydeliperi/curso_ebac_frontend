function validaForm() {
            const campoA = document.getElementById("valor-a").value;
            const campoB = document.getElementById("valor-b").value;

            if (campoB > campoA) {
                alert("Formulário válido!");
            } else {
                alert("Formulário inválido, valor B deve ser maior que A!");
            }
        }
