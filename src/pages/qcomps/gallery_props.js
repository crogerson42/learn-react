function Profile({person, size=70}) {
  return (
    <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
          alt={person.name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awardCount} </b>
            {person.awardList}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discoveries}
          </li>
        </ul>
      </section>
  )
}

export default function GalleryRefactor() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG', profession: 'physicist and chemist', awardCount: '4', awardList: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)', discoveries: 'polonium (element)'}}
        //size={200}
      />
      <Profile
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2', profession: 'geochemist', awardCount: '2', awardList: '(Miyake Prize for geochemistry, Tanaka Prize)', discoveries: 'a method for measuring carbon dioxide in seawater'}}
        //size={200}
      />
    </div>
  );
}

/**
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/szV5sdGs.jpg'
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>

      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>

    </div>
  );
}
*/
