var elPokemonList = document.querySelector('.pokemon__list');
var elForm = document.querySelector('.pokemon__form');
var elInputFirst = document.querySelector('.form__input--1');
var elInputSecond = document.querySelector('.form__input--2');
var elInputThird = document.querySelector('.form__input--3');
var elInputFourth = document.querySelector('.form__input--4');
var elInputFifth = document.querySelector('.form__input--5');



function addNewPokemon(
    pokemonImg, 
    pokemonName,
    pokemonType,
    pokemonWeight,
    pokemonHeight,
    pokemonArr) {
        
        var inputFirstValue = pokemonImg.value.trim();
        var inputSecondValue = pokemonName.value.trim();
        var inputThirdValue = pokemonType.value.trim();
        var inputFourthValue = pokemonWeight.value.trim();
        var inputFifthValue = pokemonHeight.value.trim();
        
        var newPokemon = ({
            img: inputFirstValue,
            name: inputSecondValue,
            type: inputThirdValue.split(','),
            weight: inputFourthValue + ' kg',
            height: inputFifthValue + ' m'
        })
        pokemonArr.unshift(newPokemon)
    }
    
    
    function handleFormSubmit(evt) {
        
        evt.preventDefault();
        
        addNewPokemon(
            elInputFirst,
            elInputSecond,
            elInputThird,
            elInputFourth,
            elInputFifth,
            pokemons);
            
            renderingPokemon(pokemons)
            
            elInputSecond.value = null;
            elInputThird.value = null;
            elInputFourth.value = null;
            elInputFifth.value = null;
            
            console.log(pokemons)
        }
        
        elForm.addEventListener('submit', handleFormSubmit);
        
        function renderingPokemon(_pokemons) {
            
            elPokemonList.innerHTML = null;
            
            for (var i = 0; i < _pokemons.length; i++) {
                
                // Creating new elements
                
                var newLi = document.createElement('li');
                var newInner = document.createElement("div");
                var newImg = document.createElement('img');
                var newHeading = document.createElement('h4');
                var newUl = document.createElement('ul');
                var newSpan = document.createElement('span');
                var newSpanAge = document.createElement('span');
                
                // Setting attributes
                
                newLi.setAttribute('class', 'pokemon__item bg-light  border border-3 border-dark p-0 mb-3');
                newInner.setAttribute('class', 'p-4 border-top border-3 border-dark')
                newImg.setAttribute('src', _pokemons[i].img);
                newImg.setAttribute('alt', _pokemons[i].name + ', image');
                newImg.setAttribute('class', 'pokemon__image mx-auto d-block mb-3');
                newImg.setAttribute('width', 157);
                newImg.setAttribute('height', 157);
                newHeading.setAttribute('class', 'pokemon__heading fw-bold text-dark');
                newUl.setAttribute('class', 'pokemon__feature d-flex');
                newSpan.setAttribute('class', 'pokemon__weight mx-4 ms-0 fw-bold');
                newSpanAge.setAttribute('class', 'pokemin__age ms-2 fw-bold')
                
                for (var j = 0; j < _pokemons[i].type.length; j++) {
                    
                    var newTypeList = document.createElement('li');
                    newTypeList.setAttribute('class', 'pokemon__type text-dark mb-1')
                    newTypeList.textContent = _pokemons[i].type[j]
                    newUl.appendChild(newTypeList)
                    
                }
                
                // Assign
                
                newHeading.textContent = _pokemons[i].name;
                newSpan.textContent = _pokemons[i].weight;
                newSpanAge.textContent = _pokemons[i].height;
                
                // Appending
                
                newLi.appendChild(newImg);
                newLi.appendChild(newInner);
                newInner.appendChild(newHeading);
                newInner.appendChild(newUl);
                newInner.appendChild(newSpan);
                newInner.appendChild(newSpanAge)
                elPokemonList.appendChild(newLi)
            }
        }
        
        renderingPokemon(pokemons)