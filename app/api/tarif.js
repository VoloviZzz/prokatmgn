

exports.add = (req, res, next) => {
	const Model = req.app.Model;
	console.log(req.body);
	return Model.tarif.add(req.body).then(([error, rows]) => {
		if (error) return { message: error.message, error };
		return { status: 'ok', data: rows}
	})
}

exports.remove = (req, res, next) => {
	const Model = req.app.Model;
	return Model.tarif.del({ id: req.body.id }).then(([error, rows]) => {
		if (error) return { message: error.message, error };
		return { status: 'ok' }
	})
}
