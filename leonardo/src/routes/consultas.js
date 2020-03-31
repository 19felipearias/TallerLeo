const router = require('express').Router();
const mysql = require('../database');

/* PUNTO 1 */

router.get('/punto1', async (req,res) => {
    const consulta = await mysql.query("SELECT * FROM productos");
    res.json({ consulta: consulta });
});

/* PUNTO 2 */

router.get('/punto2/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(`SELECT * FROM productos WHERE id_producto = '${id}'`);
    res.json({ consulta: consulta });
});

/* PUNTO 3 */

router.get('/punto3/:codigo', async (req,res) => {
    const { codigo } = req.params;
    const consulta = await mysql.query(`SELECT * FROM productos WHERE codigo = '${codigo}'`);
    res.json({ consulta: consulta });
});

/* PUNTO 4 */

router.get('/punto4/:producto', async (req,res) => {
    const { producto } = req.params;
    const consulta = await mysql.query(`SELECT * FROM productos WHERE nombre = '${producto}'`);
    res.json({ consulta: consulta });
});

/* PUNTO 5 */

router.get('/punto5/:valor1/:valor2', async (req,res) => {
    const { valor1,valor2 } = req.params;
    const consulta = await mysql.query(`SELECT * FROM productos WHERE valor BETWEEN ${valor1} AND ${valor2}`);
    res.json({ consulta: consulta });
});

/* PUNTO 6 */

router.get('/punto6', async (req,res) => {
    const consulta = await mysql.query("INSERT INTO productos(nombre,valor,codigo,imagen) VALUES('cereal',3000,'VVVVV','img4.png')");
    res.json({ consulta: consulta });
});

/* PUNTO 7 */

router.get('/punto7', async (req,res) => {
    const consulta = await mysql.query("INSERT INTO usuarios(nombre,usuario,password) VALUES('juan','juan123','2222')");
    res.json({ consulta: consulta });
});

/* PUNTO 8 */


router.get('/punto8', async (req,res) => {
    const consulta = await mysql.query("INSERT INTO pedidos(id_producto,id_usuario,valor,cantidad) VALUES(1,1,2000,3)");
    res.json({ consulta: consulta });
});


/* PUNTO 9 */

router.get('/punto9/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(`DELETE FROM productos WHERE id_producto = ${id}`);
    res.json({ consulta: consulta });
});

/* PUNTO 10 */

router.get('/punto10/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(`DELETE FROM pedidos WHERE id_pedido = ${id}`);
    res.json({ consulta: consulta });
});

/* PUNTO 11 */

router.get('/punto11/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(`DELETE FROM usuarios WHERE id_usuario = ${id}`);
    res.json({ consulta: consulta });
});

/* PUNTO 12 */

router.get('/punto12/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE productos
        SET nombre = 'otronombre',
        valor = 6000,
        codigo = 'AJSKAJDKSJ',
        imagen = 'otraimagen'
        WHERE id_producto = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 13 */

router.get('/punto13/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE productos
        SET nombre = 'solonombre'
        WHERE id_producto = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 14 */

router.get('/punto14/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE productos
        SET codigo = 'otrocodigo'
        WHERE id_producto = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 15 */

router.get('/punto15/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE productos
        SET valor = 6969,
        WHERE id_producto = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 16 */

router.get('/punto16/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE productos
        SET imagen = 'imagen23232.png'
        WHERE id_producto = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 17 */

router.get('/punto17', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE productos
        SET nombre = 'otronombre',
        valor = 6000,
        codigo = 'AJSKAJDKSJ',
        imagen = 'otraimagen'
        WHERE id_producto = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 18 */

router.get('/punto18/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE usuarios
        SET nombre = 'otronombre',
        usuario = 'otrousuario',
        password = 'otrapassword'
        WHERE id_usuario = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 19 */

router.get('/punto19/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE usuarios
        SET usuario = 'otrousuariousuario',
        WHERE id_usuario = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 20 */

router.get('/punto20/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE usuarios
        SET password = 'otrapasswordpassword'
        WHERE id_usuario = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 21 */

router.get('/punto21/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE pedidos
        SET id_producto = 1,
        id_usuario = 1,
        valor = 999999,
        cantidad = 20
        WHERE id_pedido = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 22 */

router.get('/punto22/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE pedidos
        SET usuario = 'otrousuario'
        WHERE id_pedido = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 23 */

router.get('/punto23/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE pedidos
        SET valor = 999999,
        WHERE id_pedido = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 24 */

router.get('/punto24/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE pedidos
        SET id_producto = 69,
        WHERE id_pedido = ${id}

        `
    );
    res.json({ consulta: consulta });
});

/* PUNTO 25 */

router.get('/punto25/:id', async (req,res) => {
    const { id } = req.params;
    const consulta = await mysql.query(
        `
        UPDATE pedidos
        SET cantidad = 69
        WHERE id_pedido = ${id}

        `
    );
    res.json({ consulta: consulta });
});


module.exports = router;