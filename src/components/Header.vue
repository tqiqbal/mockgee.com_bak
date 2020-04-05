<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/documenation' }">
                Documentation
            </b-navbar-item>
             <b-navbar-dropdown label="Product">
                <b-navbar-item href="#">
                    Mockgee Community Edtion
                </b-navbar-item>
                <b-navbar-item href="#">
                    Mockgee Enterprise
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Info">
                <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                    About
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item href="https://github.com/mockgee/mockgee">
                Github
            </b-navbar-item>
            <b-navbar-item href="#">
                Version: 0.1.0
            </b-navbar-item>
        </template>
    </b-navbar>
</template>