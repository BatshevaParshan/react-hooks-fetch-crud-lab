import React, { useState } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionForm from './QuestionForm';
import QuestionItem from './QuestionItem';
import QuestionList from './QuestionList';

const YourComponents = () => {
const [page, setPage] = useState("List");

const handlePageChange = (newPage) => {
setPage(newPage);
};

return (
<div>
    <AdminNavBar onChangePage={handlePageChange} />
    {page === "List" ? <QuestionList /> : <QuestionForm />}
</div>
);
};

export default YourComponents;
