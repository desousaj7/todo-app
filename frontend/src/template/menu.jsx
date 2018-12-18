import React from 'react'

export default props =>(
    <nav className = 'navbar navbar-default'>

            <div className = 'navbar-header'>
                <a className = 'navbar-brand' href='#'> 
                    <span className = 'glyphicon glyphicon-check'></span> TodoApp
                </a>
            </div>

           <div className='collapse navbar-collapse' id='navbar'>
                <ul className="nav navbar-nav">
                    <li><a href="#/todos">Tarefas</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>
           </div>

    </nav>
)