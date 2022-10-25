import { useState } from "react"
import axios from "axios"

const Menu = () => {

    const [categoria, setCategoria] = useState("people");
    const [id, setId] = useState ("")
    const [respuesta, setRespuesta] = useState({})

    const buscar = (e) => {
        e.preventDefault ();
        console.log(categoria, id);

        let url = "https://swapi.dev/api/";
        url += categoria + "/" + id;
        console.log(url)

        axios.get(url)
        .then(result => result.data)
        .then(response => {
            console.log(response);
            setRespuesta(response)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={buscar}>

                <div className="form-group row">
                    <div className="form-group row col-sm-6" >
                        <label for="recurso" className="col-sm-3 col-form-label"><b>Search For</b></label>
                        <div>
                            <select className="form-control form-select" value={categoria} onChange={(e)=> setCategoria(e.target.value)} name="recurso" id="recurso">
                                <option value="people">People</option>
                                <option value="films">Films</option>
                                <option value="starships">Starships</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="species">Species</option>
                                <option value="planets">Planets</option> 
                            </select>
                        </div>
                    </div>
                    <div className="form-group row col-sm-4">
                        <label for="id" className="col-sm-2 col-form-label" ><b>Id:</b></label>
                        <div>
                            <input type="text" id="id" name="id" class="form-control" value={id} onChange={(e)=> setId(e.target.value)} placeholder="indique el id"/>
                        </div>
                    </div>
                    <div className="form-group row col-sm-2" >
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
            <h1>{respuesta.name}</h1>
        </div>
    )
}

export default Menu;