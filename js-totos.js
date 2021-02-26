fetch("https://www.naver.com", data)
    .then(result => {
        result.json()
            .then(json => {

            }
                , error => {
                    console.log(error)
                })
    }
        , error => {
            console.log(error)
        });