import Header from '../Header/Header.vue'
import Prices from '../Prices/Prices.vue'
import Difference from '../Difference/Difference.vue'
import Switcher from '../Switcher/Switcher.vue'
import Program from '../Program/Program.vue'
import ButtonStartStudy from '../ButtonStartStudy/ButtonStartStudy.vue'
import Middle from '../Middle/Middle.vue'

export default {
    name: 'App',
    components: {
        HeaderApp: Header,
        Prices: Prices,
        Difference: Difference,
        Switcher: Switcher,
        Program: Program,
        // ButtonStartStudy: ButtonStartStudy
        // FormatOfStudy: FormatOfStudy,
        // FullstackDevelop: FullstackDevelop
        /* Program: Program, */
        Middle: Middle
    }
}