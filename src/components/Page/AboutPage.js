const AboutPage = () => {
    const commentsData = [
        {
            id: 1,
            name: 'Anna Kowalska',
            date: '23.01.2011',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quisquam porro minima eum repudiandae. Voluptatibus aspernatur tempore fuga rem, assumenda quaerat, earum ab odit ducimus distinctio iure quia id ex.'
        },
        {
            id: 2,
            name: 'Paulina Mocz',
            date: '11.05.2013',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quisquam porro minima eum repudiandae. Voluptatibus aspernatur tempore fuga rem, assumenda quaerat, earum ab odit ducimus distinctio iure quia id ex.'
        },
        {
            id: 3,
            name: 'Filip Zmoczony',
            date: '02.12.2001',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quisquam porro minima eum repudiandae. Voluptatibus aspernatur tempore fuga rem, assumenda quaerat, earum ab odit ducimus distinctio iure quia id ex.'
        }
    ]
    const comments = commentsData.map((comment) => {
        return (
        <div style={{marginBottom: 10, padding: 20}} key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.date}</p>
            <p>{comment.comment}</p>
        </div>
    )

    })
    return ( 
        <>
        <h2 style={{textAlign: 'center', marginTop: 50}}>Komentarze o nas:</h2>
        {comments}
        </>
     );
}
 
export default AboutPage;