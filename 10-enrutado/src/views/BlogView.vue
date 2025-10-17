<template>
    <div>
        <h1>Blog</h1>
        <p>Bienvenido a nuestro blog. Aquí encontrarás las últimas noticias y artículos.</p>

        <ul>
            <li><RouterLink :to= "{ name: 'articulo', params: { id: 1 }}">Artículo 1 </RouterLink></li>
            <li><RouterLink :to= "{ name: 'articulo', params: { id: 2 }}">Artículo 2</RouterLink></li>
            <li><RouterLink :to= "{ name: 'articulo', params: { id: 3 }}">Artículo 3</RouterLink></li>
        </ul>
    </div>
</template>