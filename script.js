function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"))
  document.getElementById(pageId).classList.add("active")
}

function addTransaction(method) {
  const table = document.getElementById("transactionTable").querySelector("tbody")
  const row = document.createElement("tr")

  const id = "TX-" + Math.floor(Math.random() * 1000000)
  const status = "Menunggu Pembayaran"
  const date = new Date().toLocaleString("id-ID")

  row.innerHTML = `
    <td>${id}</td>
    <td>${method}</td>
    <td style="color:orange">${status}</td>
    <td>${date}</td>
  `
  table.appendChild(row)

  alert("Transaksi via " + method + " berhasil dibuat!\nCek menu Transaksi.")
  showPage("transaksi")
        }
