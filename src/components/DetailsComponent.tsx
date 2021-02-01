import { Card, CardBody, CardHeader, CardTitle, Container, Table } from "reactstrap";

const DetailsComponent = (props: any) => {
    const { name, age, count } = props.data;
    return(
        <Container className="p-5">
            <h1 className="text-center">Profile</h1>
            <br/>
            <Card>
                <CardHeader>
                    <CardTitle tag="h1">{name}</CardTitle>
                </CardHeader>
                <CardBody>
                    <Table>
                        <tbody>
                            <tr id="name">
                                <td className="table-heading">Name</td>
                                <td>{name}</td>
                            </tr>
                            <tr id="age">
                                <td className="table-heading">Age</td>
                                <td>{age}</td>
                            </tr>
                            <tr id="count">
                                <td className="table-heading">Count</td>
                                <td>{count}</td>
                            </tr>
                            <tr id="description">
                                <td className="table-heading">Description</td>
                                <td>
                                    Hi, I am {name}. I am {age} years old and my current counter is {count}.
                                <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Container>
    )
}

export default DetailsComponent;