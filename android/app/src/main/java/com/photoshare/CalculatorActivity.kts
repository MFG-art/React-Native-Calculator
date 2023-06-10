public class CalculatorActivity extents ReactActivity {

    fun onCreate(savedInstanceState: Bundle?) {
        // Set the theme to AppTheme BEFORE onCreate to support
        // coloring the background, status bar, and navigation bar.
        // This is required for expo-splash-screen.
        setTheme(R.style.AppTheme)
        super.onCreate(null)
    }

    fun parseString(String s) {
        List parsedString = s . split ("+", "-", "*", "/")
        s.indexOf('+')
    }
}