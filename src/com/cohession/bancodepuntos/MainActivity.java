package com.cohession.bancodepuntos;

import android.app.Activity;
import android.os.Bundle;
import android.view.WindowManager;
import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
		//super.setIntegerProperty("splashscreen", android.R.drawable.ic_menu_day);
                super.setIntegerProperty("loadUrlTimeoutValue", 50000);
		//super.loadUrl("file:///android_asset/www/index.html", 10000);
                super.loadUrl("file:///android_asset/www/index.html");
	} 
}