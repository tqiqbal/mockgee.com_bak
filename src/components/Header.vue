<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logo.png"
                    alt="Create Mock APIs in seconds"
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
                <b-navbar-item tag="a" href="https://hub.docker.com/r/mockgee/mockgee" target="_blank">
                    Install Docker
                </b-navbar-item>
                <b-navbar-item tag="a" href="https://github.com/mockgee/mockgee" target="_blank">
                    Install NodeJS
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
            <b-navbar-item>
                <a href="https://github.com/mockgee/mockgee" target="_blank">
                <i class="fab fa-github fa-lg has-text-dark"></i>
                </a>
            </b-navbar-item>
            <b-navbar-item>
                <b-taglist attached>
                    <b-tag type="is-dark">version</b-tag>
                    <b-tag type="is-primary">0.1.0</b-tag>
                </b-taglist>

                <!-- <span class="has-text-dark" style="font-size: 0.9em;">Version: 0.1.0</span> -->
            </b-navbar-item>
        </template>
    </b-navbar>
</template>