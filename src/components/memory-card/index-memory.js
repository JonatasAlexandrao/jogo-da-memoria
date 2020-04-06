

const createMemoryCard = ({ src, alt, nameClass}) => ` 
    <article class="memory-card ${nameClass}">
        <img 
            class = 'icon' 
            src= "${src}"
            alt="${alt}"
            onClick="handleClick()"
        />
    </article>`
    

const handleClick = () => console.log('clicou!')

