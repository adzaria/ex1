
module.exports = (req,res,next) => {
	
	// on simule ici un retour d'une base de donnée, bienevidemment en temps normal on utilise la base de donnée et/ou les données de session ...
	res.json({name:"Elias"})

}