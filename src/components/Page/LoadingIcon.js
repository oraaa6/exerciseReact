import bootstrap from 'bootstrap'

const LoadingIcon = () => {
    return ( 
        <div className="text-center">
        <div className={`spinner-border m-5 text-primary`} role="status">
             <span className="visually-hidden">Ładowanie danych...</span>
        </div>
</div>
     );
}
 
export default LoadingIcon;