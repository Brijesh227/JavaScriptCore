1. const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};
 
const getValue = obj.getValue;
console.log(getValue());            // undefined
console.log(obj.getValue());        // 42

2.searching in postgresql (ts_vector in built fuction)

3.Row-level security in postgresql

3.which data goes into sql and no sql in hospital management system (how to secure patient data?)

4.central session management(redis)

5.auth service in microservice

6.what if request payload more than desired size(> 6 MB) in lambda

7.multi tenancy 

8.rolling up in ci/cd

9.What are the different ways of communication between two microservices?

10.grpc vs pub-sub(scenario)

11. middle-ware, event loop

12. How to handle fail scenario in message-broker(queue)



