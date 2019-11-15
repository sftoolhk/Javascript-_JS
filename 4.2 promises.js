
var minhaPromise = function()
{
    return new Promise(function(resolv, reject)
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/sftoolhk');
        xhr.send(null);

        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === 4)
            {
                if (xhr.status === 200)
                {
                    resolv(JSON.parse(xhr.responseText));
                }
                else
                {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response) 
    {
        console.log(response);
    })
    .catch(function(error)
    {
        console.log(error);
    });