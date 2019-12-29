<template>
    <b-row>
        <b-col cols="12">
            <h1>Receive Inventory</h1>
        </b-col>
        <b-col cols="12" class="text-left">
            <b-col>
                <h3>Grains</h3>
                <hr>
            </b-col>
            <b-row>
                <b-col cols="6">
                    <strong>Product</strong>
                    <v-select :options="grains" taggable v-model="grainSelect" />
                </b-col>
                <b-col cols="3">
                    <strong>Quantity</strong>
                    <v-select :options="[1,2,3]" taggable />
                </b-col>
                <b-col cols="3">
                    <strong>Unit</strong>
                    <v-select :options="['lb', '55lb bag(s)', 'kg']" taggable />
                </b-col>
            </b-row>
            <b-col offset="11" class="mt-2">
                <b-button pill variant="outline-success">+</b-button>
            </b-col>
        </b-col>
        <b-col cols="12" class="text-left mt-4">
            <b-col>
                <h3>Hops</h3>
                <hr>
            </b-col>
            <b-row>
                <b-col cols="6">
                    <strong>Product</strong>
                    <v-select :options="hops" taggable v-model="hopSelect" />
                </b-col>
                <b-col cols="3">
                    <strong>Quantity</strong>
                    <v-select :options="[1,2,3]" taggable />
                </b-col>
                <b-col cols="3">
                    <strong>Unit</strong>
                    <v-select :options="['lb', '55lb bag(s)', 'kg']" taggable />
                </b-col>
            </b-row>
            <b-col offset="11" class="mt-2">
                <b-button pill variant="outline-success">+</b-button>
            </b-col>
        </b-col>
        <b-col cols="12" class="text-left mt-4">
            <b-col>
                <h3>Additions</h3>
                <hr>
            </b-col>
            <b-row>
                <b-col cols="6">
                    <strong>Product</strong>
                    <v-select :options="additions" taggable />
                </b-col>
                <b-col cols="3">
                    <strong>Quantity</strong>
                    <v-select :options="[1,2,3]" taggable />
                </b-col>
                <b-col cols="3">
                    <strong>Unit</strong>
                    <v-select :options="['lb', '55lb bag(s)', 'kg']" taggable v-model="grainSelect" />
                </b-col>
            </b-row>
            <b-col offset="11" class="mt-2">
                <b-button pill variant="outline-success">+</b-button>
            </b-col>
        </b-col>
        <b-navbar type="light" variant="light" fixed="bottom">
            <b-col cols="12" offset-sm="9" sm="3">
                <b-button variant="success" :to="'dashboard'">Submit Inventory ></b-button>
            </b-col>
        </b-navbar>
    </b-row>
</template>

<script>
    export default {
      data() {
        return {
          grainSelect: [],
          grains: [
            'Two Row Barley',
            'Six Row Barley',
            'Biscuit Malt',
            'Black Malt',
            'Roasted Barley'
          ],
          hopSelect: [],
          hops: [
            'Cascade',
            'Mosaic',
            'Amarillo',
            'Nugget',
            'Simcoe',
            'Triumph'
          ],
          additionSelect: [],
          additions: [
            'Honey',
            'Brown Sugar',
            'Raspberries',
            'Chocolate'
          ]
        }
      }
    }
</script>
