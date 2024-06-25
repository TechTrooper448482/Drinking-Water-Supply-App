import 'package:flutter/material.dart';
import 'package:water_supplier/splash_screen.dart';

void main() {
  runApp(const FirstUi());
}
class FirstUi extends StatelessWidget {
  const FirstUi({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SplashScreen(),
      debugShowCheckedModeBanner: false,
    );
  }


}