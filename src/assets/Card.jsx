import "./card.css";
const pokemon = [
  {
    id: 1,
    nombre: "pikachu",
    imagen: "https://i.ibb.co/HtMW1Vz/piakchu.png",
  },
  {
    id: 2,
    nombre: "Charizard",
    imagen: "https://i.ibb.co/K02VHn9/charizard.png",
  },
];
export function Card() {
  return pokemon.map((item,index) => {
    return (
      <div className="card" key={index}>
        <h1>{item.nombre}</h1>
        <img src={item.imagen} />
      </div>
    );
  });
}
