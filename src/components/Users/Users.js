import {Container, Pagination, TextField, Stack, PaginationItem} from '@mui/material'
import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

import css from './Users.module.css'
const Users = () => {
    
    const [post, setPosts] = useState([]);
    const [query, setQuery] = useState('react');
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);

    useEffect(() => {
        setPageQty(20);
    }, [page, query])

    return (
  <div className={css.box}>
    <div className={css.usersBox}>
        <div className={css.pagin}>

            <div>
                wqwq
                wqwqwqwqwqwqw
                <h1>qwqwqwqw</h1>
            </div>
            <Container>
                <Stack spacing={2}>
                    {
                        !!pageQty && (<Pagination
                            sx={{marginY:3, marginX: "auto"}}
                            count={pageQty}
                            page={page}
                            showFirstButton
                            showLastButton
                            onChange={(_, num) => setPage(num)}
                            renderItem={
                                (item) =>(
                                    <PaginationItem
                                    component={Link}
                                    to={`/?page=${item.page}`}
                                    {...item}
                                    />
                                )
                            }
                        />)
                    }

                </Stack>
            </Container>


        </div>

    </div>
  </div>
);
};

export {Users};