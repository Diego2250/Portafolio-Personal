import './App.css';
import React from 'react';
import AboutMe from './AboutMe';
import SkillCardSlider from './SkillCardSlider';
import Social from './Social';
import Proyects from './Proyects';

function App() {
  const skillCards1 = [
    {
      imageUrl: 'https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png',
      title: 'Python',
      description: 'I have had the opportunity to use Python for various projects, from creating a Discord bot, desktop application development, data analysis, to statistical calculations.',
    },
    {
      imageUrl: 'https://hotmart.s3.amazonaws.com/product_contents/7523d29c-b85b-4e2d-b845-da195029ec42/vbnet.png',
      title: 'Visual Basic .NET',
      description: 'I have used Visual Basic .NET in my work for developing SAP Business One applications.',
    },
    {
      imageUrl: 'https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png',
      title: 'MySQL',
      description: 'I have used MySQL for creating and managing databases for various projects.',
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png',
      title: 'PostgreSQL',
      description: 'Postgres is the database I have used the most in my personal projects and at university. I have worked on everything from basic queries, triggers, and functions to data warehousing with integration with Power BI.',
    },
    {
      imageUrl: 'https://github.com/Diego2250/Diego2250/assets/77738746/003df611-3b6a-4320-95fc-2590890db8a7',
      title: 'SAP Business One',
      description: 'SAP Business One is the ERP system I use in my work. I have had the opportunity to learn and develop applications in this ERP for the company I work for.',
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
      title: 'C++',
      description: 'I learned to program in C++ at university. I have used C++ for basic tasks all the way to multi-threaded processes.',
    },
    {
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/019/899/953/non_2x/java-free-download-free-png.png',
      title: 'Java',
      description: 'Java was the first object-oriented programming language I learned. I have used Java to create parking systems, computational simulations, games, and programming language interpreters.',
    },
    {
      imageUrl: 'https://icon-library.com/images/html5-icon-png/html5-icon-png-9.jpg',
      title: 'HTML',
      description: 'I have been using HTML since high school. I have created projects such as an university website, page replications, personal project websites, calculators, etc.',
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      title: 'JavaScript',
      description: 'I have always used JavaScript in conjunction with HTML and CSS. I have created websites, calculators, games, etc.',
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
      title: 'CSS',
      description: 'I use CSS to style all the web pages I have created.',
    },
    {
      imageUrl: 'https://seeklogo.com/images/M/microsoft-sql-server-logo-96AF49E2B3-seeklogo.com.png',
      title: 'SQL Server',
      description: 'SQL Server is the database I have used the most in my work. I have handled databases with millions of records, created triggers, functions, stored procedures, etc.',
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'React',
      description: 'React is my favorite framework for building web pages. It is the framework I am currently using to create this website.',
    },
  ];

  const proyectosData = [
    {
      imageLink: 'https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png',
      title: 'Sistema de manejo de hospitales',
      description: 'Se realizó un sistema de manejo en el cual se pueden registrar pacientes, doctores, casos medicos, enfermedades, centros de salud, etc. Tiene un sistema de validacion de usuarios y se pueden realizar consultas de lectura y escritura a una base de datos El sistema fue realizado en Python y se utilizó Postgres como base de datos.',
      buttonLink: 'https://github.com/angelcast2002/proyecto2_BD_python',
    },
    {
      imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'Replica de Spotify en React',
      description: 'Se ha replicado la pagina de Spotify utilizando React. Se utilizó CSS para el diseño de la pagina.',
      buttonLink: 'https://github.com/Diego2250/Pagina-Spotify',
    },
    {
      imageLink: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
      title: 'Replicaión de imagen en CSS',
      description: 'Se ha replicado una imagen utilizando CSS. Se utilizó HTML para la estructura de la pagina.',
      buttonLink: 'https://github.com/Diego2250/CSS-image',
    },
    {
      imageLink: 'https://static.vecteezy.com/system/resources/previews/019/899/953/non_2x/java-free-download-free-png.png',
      title: 'Interprete de Lisp en Java',
      description: 'Se ha creado un interprete de Lisp en Java. Se utilizó Java para la creación del interprete. Acepta funciones, operaciones matematicas, condicionales, etc.',
      buttonLink: 'https://github.com/jazurdia/Proyecto-1',
    },
  ];

  return (
    <div className="area">
      <AboutMe />
      <h1>Skills</h1>
      <div className="cards">
        {skillCards1.map((card, index) => (
          <SkillCardSlider
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <h1>Proyects</h1>
      <div className="proyects">
        {proyectosData.map((proyecto, index) => (
          <Proyects
            key={index}
            imageLink={proyecto.imageLink}
            title={proyecto.title}
            description={proyecto.description}
            buttonLink={proyecto.buttonLink}
          />
        ))}
      </div>
      <div className="footer">
        <div className="words">
          <ul className="t">
            <li className="word">repeat.</li>
            <li className="word">Develop.</li>
            <li className="word">design.</li>
            <li className="word">Sketch.</li>
            <li className="word">Imagine.</li>
          </ul>
        </div>
        <h1>Contact me!</h1>
        <Social />
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
}

export default App;
