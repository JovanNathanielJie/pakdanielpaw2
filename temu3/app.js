const express = require('express');
const app = express();
const PORT = 3000;

// 1. Layani file statis di folder "public"
app.use(express.static('public'));

// 2. (Opsional) Route tambahan
app.get('/about', (req, res) => {
    res.send('<h1>Tentang Kami</h1><p>Halaman tambahan dengan HTML langsung.</p>');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});