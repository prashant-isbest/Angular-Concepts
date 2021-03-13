import { Component, EventEmitter, Output } from "@angular/core";
import { AccountsService } from "../services/accounts.services";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [],
})
export class NewAccountComponent {
  constructor(private accountsService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
