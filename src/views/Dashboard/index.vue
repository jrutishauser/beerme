<template>
    <b-row>
        <b-col cols="12">
            <h1>Dashboard</h1>
        </b-col>
        <b-col cols="12">
            <b-row class="justify-content-center">
                <b-col cols="12" sm="6" md="4">
                    <b-button block variant="outline-primary" :to="'receiving'">
                        Receive Inventory
                    </b-button>
                </b-col>
                <b-col cols="12" sm="6" md="4">
                    <b-button block variant="outline-info" :to="'brew'">Brew Batch</b-button>
                </b-col>
                <b-col cols="12" class="mt-3">
                    <h5>Next available fermenter: <strong>01/15/2020</strong> (7 days)</h5>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="12" class="mt-3">
            <b-row  class="mb-3">
                <b-col cols="12" sm="3">
                    <b-img thumbnail fluid src="https://via.placeholder.com/150" alt="Image 1" />
                </b-col>
                <b-col cols="12" sm="6" class="text-left align-middle">
                    Stage: <strong>Fermenting</strong><br>
                    Name: <strong>Ole Faithful</strong><br>
                    Date Complete: <strong>01/15/2020</strong><br>
                    <b-progress :value="75" show-value />
                </b-col>
                <b-col>
                    <div>
                        <b-link>View</b-link> |
                        <b-link>Edit</b-link>
                    </div>
                    <div class="h-100 mt-3">
                        <b-button variant="outline-light" v-b-popover.hover="'Add bananas'" >
                            <i class="far fa-exclamation-circle fa-lg" style="color: darkorange;"/>
                        </b-button>
                        <p>Action required in <strong>3</strong> days.</p>
                    </div>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col cols="12" sm="3">
                    <b-img thumbnail fluid src="https://via.placeholder.com/150" alt="Image 1" />
                </b-col>
                <b-col cols="12" sm="6" class="text-left align-middle">
                    Stage: <strong>Fermenting</strong><br>
                    Name: <strong>Brown Town</strong><br>
                    Date Complete: <strong>02/15/2020</strong><br>
                    <b-progress :value="10" show-value />
                </b-col>
                <b-col>
                    <div>
                        <b-link>View</b-link> |
                        <b-link>Edit</b-link>
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>
