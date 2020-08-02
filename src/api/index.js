export const apiGet = (url) => {
    return (() => fetch(url).then(v => v.json()));
}; 

export const apiPut = (url, id, obj ) => {
    fetch( 
        `${url}/${id}`,
        {
            method:     'PUT',
            body:       JSON.stringify( obj ),
            headers:    new Headers( { 'Content-type': 'application/json' } )
        }
    ).then(v => v.json())
    .then( r => {
        if ( true ){

            const validation =  {
                validation: { 
                    age: 'Debe ser menor de edad',
                    name: 'El nombre es incorrecto'
                }
            };

            return Promise.reject( validation );
        }
        return r;
    })

}; 