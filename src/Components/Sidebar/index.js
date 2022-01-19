function Sidebar({ title, description }){
    return ( <div className="sidebar-container"
    style={{ position: 'fixed', top: '0vh', left: '0vw', 
    height: '100%', width: '280px',
    backgroundColor: '#D3EDFF', opacity: '0.9',
    padding: '30px'}} >

    <h1>{title}</h1>
    <p>{description}</p>
    </div>
    )
}

export default Sidebar;