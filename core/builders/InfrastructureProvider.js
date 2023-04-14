import HttpClient from "../infrastructure/HttpClient";

class InfrastructureProvider {
    static HttpClient = new HttpClient();
}

export default InfrastructureProvider;