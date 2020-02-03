import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {

  mapPets = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    
    return <div className="ui cards">{this.mapPets()}</div>;
  }
}

export default PetBrowser;





// import React from 'react';
// import Pet from './Pet';

// class PetBrowser extends React.Component {
//   render() {
//     const petCards = this.props.pets.map(pet => (
//       <Pet pet={pet} key={pet.id}  />
//     ));

//     return <div className="ui cards">{petCards}</div>;
//   }
// }

// export default PetBrowser;
