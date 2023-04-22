const router = require("express").Router();
const pool = require("../config/db-connection");

//GET
router.get("/", async (req, res) => {
  let sql = `SELECT * FROM tb_pelis`;
  const [rows] = await pool.query(sql);
  res.json(rows);
});

router.get("/:id", async (req, res) => {
  let sql = `SELECT * FROM tb_pelis WHERE id_peli = ${req.params.id}`;
  const [rows] = await pool.query(sql);
  res.json(rows);
});

//POST
router.post("/", async (req, res) => {
  const { nombre, imagen } = req.body;
  let sql = `INSERT INTO tb_pelis(nombre,imagen,valoracion) values("${nombre}","${imagen}",0)`;
  await pool.query(sql);
  res.send("Movie added successfully");
});

//PUT
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, imagen, valoracion } = req.body;
  let sql = `UPDATE tb_pelis SET 
              nombre = '${nombre}', imagen = '${imagen}' , valoracion = ${valoracion} 
              WHERE id_peli = ${id}`;
  await pool.query(sql);
  res.send("Movie updated successfully");
});

//DELETE
router.delete("/:id", async (req, res) => {
  let sql = `DELETE FROM tb_pelis WHERE id_peli = ${req.params.id}`;
  await pool.query(sql);
  res.send("Movie deleted successfully");
});

module.exports = router;
