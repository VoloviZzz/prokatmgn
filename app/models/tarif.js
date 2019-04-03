const db = require('../libs/db');

exports.get = (args = {}) => {
	let { id } = args;
	var q = `
		SELECT * FROM tarif
	`;
	return db.execQuery(q);
}

exports.upd = (args = {}) => {
	if (!!args.target === false) return Promise.resolve([new Error('Отсутствует параметр target')]);
	if (typeof args.value === "undefined") return Promise.resolve([new Error('Отсутствует параметр value')]);
	if (!!args.id === false) return Promise.resolve([new Error('Отсутствует параметр id')]);
	return db.execQuery(`UPDATE history SET ${args.target} = '${args.value}' WHERE id = ${args.id}`);
}

exports.add = (args = {}) => {
	console.log(args);
	return db.insertQuery(`
		INSERT INTO tarif
		SET
		name = "`+args.name+`",
		price = "`+args.price+`",
		color = "`+args.color+`",
		\`desc\` = "`+args.desc+`",
		year = "`+args.year+`",
		kpp = "`+args.kpp+`",
		conder = "`+args.condic+`",
		dvs = "`+args.dvc+`",
		zalog = "`+args.zalog+`",
		img = "`+args.img+`"
	`);
}

exports.del = (args = {}) => {
	if (!!args.id === false) return Promise.resolve([new Error('Отсутствует параметр id')]);
	var q = `DELETE FROM tarif WHERE id = ${args.id}`;
	console.log(q);
	return db.execQuery(q);
}
