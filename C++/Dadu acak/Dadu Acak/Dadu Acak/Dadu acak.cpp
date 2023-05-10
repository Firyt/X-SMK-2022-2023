#include <iostream>
#include <cstdlib> // fungsi random

using namespace std;

int main() {

	char lanjut;
	while(true){
		cout << "Lempar dadu ? (y / n)";
		cin >>  lanjut;

		if (lanjut == 'y', 'yes') {
			cout << rand() << endl;
		}
		else if (lanjut == 'n', 'no') {
			break;
		}else{
			cout << "Warning ketik y/n dong tod!! \n";
		}
		
	}
	cin.get();
	return 0;

}