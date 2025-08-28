// Ganti halaman
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"))
  document.getElementById(pageId).classList.add("active")
}

// Tambah transaksi dummy
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

  alert("Transaksi berhasil dibuat dengan metode " + method + "!\nCek menu Transaksi.")
  showPage("transaksi")
}