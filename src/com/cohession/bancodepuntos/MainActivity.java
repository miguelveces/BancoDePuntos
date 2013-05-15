package com.cohession.bancodepuntos;

import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//super.loadUrl("file:///android_asset/www/index.html");
		//getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN | WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN
		//	);
		super.setIntegerProperty("splashscreen", android.R.drawable.ic_menu_day);
		super.loadUrl("file:///android_asset/www/index.html", 10000);
	} 
}