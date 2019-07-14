
import React from "react";


class App extends React.Component {

	// au chargement initial, le composant est dans un etat "public", 
	constructor(props) {
		super(props);
		this.state = {
            "space": "public"
        }
    }

    render()
    {

    	// le changement d'état provoque un rendu, il faudrait que lorsque l'etat est "private", l'application affiche 'bienvenue {nom}'
    	return(
    	    <div className="login-form">
                <h1>Login Form</h1>
                <form action="/login" method="POST">
                    <input type="text" name="username" placeholder="Username" required >
                    <input type="password" name="password" placeholder="Password" required >
                    <input type="submit" >
                </form>
    		</div>
    		)
    }
}


export default App;