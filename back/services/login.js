
module.exports = (req,res,next) => {

	// marche avec body ou headers
	username=req.body.username.toLowerCase()
	password=req.body.password
	
	// on simule ici un retour d'une base de donnée, bien evidemment en temps normal on utilise la base de donnée et/ou les données de session ...
	if(username==="Elias" && password==="mdp")
	{
		res.json({auth:true})
	}
	else
	{
		res.json({auth:false})
	}

}
