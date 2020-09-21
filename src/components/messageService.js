import { BehaviorSubject } from "rxjs";

const subscriber = new BehaviorSubject(0);

const messageService = {
    send: function (m) {
        subscriber.next(m);
    },
};

export { messageService, subscriber };
