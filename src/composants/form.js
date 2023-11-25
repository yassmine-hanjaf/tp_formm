import React, { useState } from 'react';

export default function Form() {
  const [nom, setnom] = useState('');
  const [password, setpassword] = useState('');
  const [ville, setville] = useState('');
  const [genre, setgenre] = useState('');
  const [datenaissance, setdatenaissance] = useState('');
  const [loisirs, setloisirs] = useState([]);

  function handleloisirs(e) {
    if (!loisirs.includes(e.target.value)) {
      setloisirs([...loisirs, e.target.value]);
    } else {
      setloisirs([...loisirs.filter((item) => item !== e.target.value)]);
    }
  }

  function handlesubmit(e) {
    e.preventDefault();
    alert(`bonjour ${nom} .\n vous etes né le :${datenaissance} .\n vous habitez à :${ville} .\n et vos loisirs sont :${loisirs} .\n ravi de vous connaitre`);
  }

  return (
    <div className="container">
      <h1 className="m-5">Formulaire de connaissance</h1>
      <form onSubmit={(e) => handlesubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label text-danger">Nom:</label>
          <input type="text" className="form-control" id="nom" onChange={(e) => setnom(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-danger">Mot de passe:</label>
          <input type="password" className="form-control" id="password" onChange={(e) => setpassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label text-danger">Date de naissance:</label>
          <input type="date" className="form-control" id="date" onChange={(e) => setdatenaissance(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="ville" className="form-label text-danger">Ville:</label>
          <select className="form-select" id="ville" onChange={(e) => setville(e.target.value)}>
            <option>Choisir une ville</option>
            <option value="tanger">Tanger</option>
            <option value="oued zem">Oued Zem</option>
            <option value="khouribga">Khouribga</option>
            <option value="settat">Settat</option>
            <option value="berechid">Berechid</option>
            <option value="beni mellal">Beni Mellal</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label text-danger">Genre:</label>
          <div className="form-check">
          <input type="radio" name="genre" value="homme"  onChange={(e)=>setgenre(e.target.value)}/>homme &nbsp;&nbsp;
    <input type="radio" name="genre" value="femme"  onChange={(e)=>setgenre(e.target.value)}/>femme
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label text-danger">Loisirs:</label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" name="loisirs" value="sport" onChange={(e) => handleloisirs(e)} />
            <label className="form-check-label">Sport</label>
          </div>
          <div className="mb-3">
          <div className="form-check">
          <input type="checkbox" name="loisirs" value="sport" onChange={(e)=>handleloisirs(e)}/>sport&nbsp;
        <input type="checkbox" name="loisirs" value="lecture" onChange={(e)=>handleloisirs(e)}/>lecture&nbsp;
        <input type="checkbox" name="loisirs" value="cuisine" onChange={(e)=>handleloisirs(e)}/>cuisine&nbsp;
        <input type="checkbox" name="loisirs" value="musique" onChange={(e)=>handleloisirs(e)}/>musique
          </div>
        </div></div>
        <div className="mb-3">
          <input type="submit" className="btn btn-primary" value="S'inscrire" />
        </div>
      </form>
    </div>
  );
}
