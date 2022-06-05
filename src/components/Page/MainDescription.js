const MainDescription = ({name, brewed, description}) => {
    return ( 
        <div style={{paddingLeft: 30}}>
            <h3>{name}</h3>
            <h5>{brewed}</h5>
            <p>{description}</p>
        </div>
     );
}
 
export default MainDescription;