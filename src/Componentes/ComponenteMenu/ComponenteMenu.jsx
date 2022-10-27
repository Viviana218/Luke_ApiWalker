import { useState } from "react"
import axios from "axios"
import th.jpg from "../public/th.jpg"

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
        .catch(error => 
            return ("Estos no son los droides que está buscando", <img src="../public/th.jpg" alt="" className="img-fluid"/>, error)
            )
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
            <div>
            {
                categoria === "people" ?
                    <div>
                        <h1> {respuesta.name}</h1>
                        <p><b>Height:</b> {respuesta.height}</p>
                        <p><b>Mass:</b> {respuesta.mass}</p>
                        <p><b>Hair Color:</b> {respuesta.hair_color}</p>
                    </div>
                :
                    null
            }
            {
                categoria === "films" ?
                    <div>
                        <h1>{respuesta.title}</h1>
                        <p><b>Episode Id:</b> {respuesta.episode_id}</p>
                        <p><b>Opening crawl :</b> {respuesta.opening_crawl}</p>
                        <p><b>Director :</b> {respuesta.director}</p>
                        
                    </div>
                :
                    null
            }
            {
                categoria === "starships" ?
                    <div>
                        <h1>{respuesta.name}</h1>
                        <p><b>Model:</b> {respuesta.model}</p>
                        <p><b>Manufacturer:</b> {respuesta.manufacturer}</p>
                        <p><b>Cost in credits :</b> {respuesta.cost_in_credits}</p>
                        
                    </div>
                :
                    null
            }
            {
                categoria === "vehicles" ?
                    <div>
                        <h1> {respuesta.name}</h1>
                        <p><b>Model:</b> {respuesta.model}</p>
                        <p><b>Manufacturer:</b> {respuesta.manufacturer}</p>
                        <p><b>Cost in credits:</b> {respuesta.cost_in_credits}</p>
                        
                    </div>
                :
                    null
            }
            {
                categoria === "species" ?
                    <div>
                        <h1>{respuesta.name}</h1>
                        <p><b>Classification:</b> {respuesta.classification}</p>
                        <p><b>Designation:</b> {respuesta.designation}</p>
                        <p><b>Average Height:</b> {respuesta.average_height}</p>
                        
                    </div>
                :
                    null
            }
            {
                categoria === "planets" ?
                    <div>
                        <h1> {respuesta.name}</h1>
                        <p><b>Rotation period:</b> {respuesta.rotation_period}</p>
                        <p><b>Orbital period:</b> {respuesta.orbital_period}</p>
                        <p><b>Diameter:</b> {respuesta.diameter}</p>
                        
                    </div>
                :
                    null
            }
            </div>
        </div>
    )
}

export default Menu;